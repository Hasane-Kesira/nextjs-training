"use client";

import clsx from 'clsx';

import Links from '../../common/components/links';
import styles from './layout.module.css'
import React from "react";
import Modal from "./_components/modal";

export default function D01() {
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  const data = [
    {
      id: 'youtube',
      url: 'https://www.youtube.com',
      title: 'Youtube',
      target: '_blank',
    },
  ]
  return (
    <>
    <div>
      <h1 className={clsx(styles['title'], styles['shadow'])}>D01</h1>
      <Links links={data}/>
        <hr />
        <div>
            <button onClick={()=>setIsOpenModal(true)} className="p-4 text-white font-bold bg-blue-400 rounded-xl shadow-lg">
                Open Modal
            </button>
        </div>
    </div>
    <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} title='Click' />
    </>
  );
}