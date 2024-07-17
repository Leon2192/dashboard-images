"use client"
import React, { useState, useEffect } from 'react';
import Card from '@/components/ui/dashboard/card/Card';
import styles from "@/components/ui/dashboard/dashboard.module.css";
import Rightbar from '@/components/ui/dashboard/rightbar/Rightbar';
import Transactions from '@/components/ui/dashboard/transactions/Transactions';
import Chart from '@/components/ui/dashboard/chart/Chart';
import Loader from '@/components/ui/dashboard/loader/Loader';

const Page = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFiles() {
      try {
        const response = await fetch("/banners/api");
        if (response.ok) {
          const data = await response.json();
          setFiles(data.files);
        } else {
          console.error("Error fetching files");
        }
      } catch (error) {
        console.error("Error fetching files", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFiles();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        {loading ? (
          <Loader />
        ) : (
          <div className={styles.cards}>
            {files.length > 0 ? (
              files.map((file, index) => (
                <Card
                  key={index}
                  name={file.name}
                  data={file.data}
                  contentType={file.contentType}
                  lastModified={file.lastModified}
                  status="Aprobado"
                />
              ))
            ) : (
              <p>No hay archivos disponibles</p>
            )}
          </div>
        )}
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
}

export default Page;
