"use client";

import { useRef, useState } from "react";
import { useSnackbar } from 'notistack';

export default function page() {
    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef(null);
    const [file, setFile] = useState(null);
    const { enqueueSnackbar } = useSnackbar();

    function handleChange(e) {
        e.preventDefault();
        console.log("File has been added");
        if (e.target.files && e.target.files[0]) {
            console.log(e.target.files);
            setFile(e.target.files[0]);
            enqueueSnackbar('Archivo correctamente cargado.', {
                variant: 'success',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
                autoHideDuration: 2000,
            });
        }
    }

    async function handleSubmitFile(e) {
        e.preventDefault();
        if (!file) {
            console.log("No file has been selected");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch("/banners/api", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                console.log(`${file.name} uploaded successfully`);
                enqueueSnackbar('Archivo cargado correctamente a Azure Blob Storage.', {
                    variant: 'success',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    },
                    autoHideDuration: 2000,
                });
                setFile(null);
                inputRef.current.value = '';
            } else {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || 'Failed to upload');
            }
        } catch (error) {
            console.error(`Failed to upload ${file.name}`, error);
            enqueueSnackbar('Error al cargar el archivo. Por favor, intenta de nuevo.', {
                variant: 'error',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right',
                },
                autoHideDuration: 2000,
            });
        }
    }



    function handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    }

    function handleDragLeave(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
    }

    function handleDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    }

    function handleDragEnter(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    }

    function removeFile() {
        setFile(null);
        inputRef.current.value = "";
        enqueueSnackbar('Archivo quitado correctamente.', {
            variant: 'success',
            anchorOrigin: {
                vertical: 'top',
                horizontal: 'right',
            },
            autoHideDuration: 2000,
        });
    }

    function openFileExplorer() {
        inputRef.current.value = "";
        inputRef.current.click();
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <form
                className={`${dragActive ? "bg-slate-400" : "bg-slate-700"} p-4 min-h-[20rem] h-2/4 w-1/2 rounded-lg text-center flex flex-col items-center justify-center`}
                onDragEnter={handleDragEnter}
                onSubmit={(e) => e.preventDefault()}
                onDrop={handleDrop}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
            >
                <input
                    placeholder="fileInput"
                    className="hidden"
                    ref={inputRef}
                    type="file"
                    onChange={handleChange}
                    accept=".xlsx,.xls,image/*,.doc,.docx,.ppt,.pptx,.txt,.pdf"
                />

                <div className="p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-24 text-rose-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                    </svg>
                </div>

                <p className="text-xl">
                    Arrastra el archivo o {" "}
                    <span
                        className="font-bold text-sky-500 cursor-pointer text-xl hover:text-rose-500 transition-colors duration-300"
                        onClick={openFileExplorer}
                    >
                        <u>Seleccionalo</u> {" "}
                    </span>
                    para cargar.
                </p>
                <br />

                {file && (
                    <div className="flex flex-row space-x-5 mt-3">
                        <span>{file.name}</span>
                        <span
                            className="text-rose-500 cursor-pointer font-bold hover:text-red-700"
                            onClick={removeFile}
                        >
                            Quitar
                        </span>
                    </div>
                )}

                <button
                    className={`bg-rose-600 rounded-lg p-2 mt-3 w-auto ${!file ? 'bg-opacity-90 cursor-not-allowed' : ''}`}
                    onClick={handleSubmitFile}
                    disabled={!file}
                >
                    <span className="p-2 text-white">Subir archivo a Azure Blob Storage</span>
                </button>
            </form>
        </div>
    );
}
