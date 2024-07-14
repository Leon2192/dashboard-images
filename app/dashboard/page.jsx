import Card from '@/components/ui/dashboard/card/Card'
import React from 'react'
import styles from "@/components/ui/dashboard/dashboard.module.css"
import Rightbar from '@/components/ui/dashboard/rightbar/Rightbar'
import Transactions from '@/components/ui/dashboard/transactions/Transactions'
import Chart from '@/components/ui/dashboard/chart/Chart'

const page = () => {
  return (
   <div className={styles.wrapper}>
    <div className={styles.main}>
    <div className={styles.cards}>
      <Card/>
      <Card/>
      <Card/>
    </div>
    <Transactions/>
    <Chart/>
    </div>
    <div className={styles.side}>
<Rightbar/>
    </div>
   </div>
  )
}

export default page