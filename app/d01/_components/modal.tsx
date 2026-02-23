import React, { useEffect, useRef } from "react";
import styles from '../layout.module.css'

export default function Modal(
    { isOpenModal, setIsOpenModal, title }: {
        isOpenModal: boolean,
        setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
        title: string
    }
) {
    const modalRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !(modalRef.current as HTMLElement).contains(event.target as Node)) {
                setIsOpenModal(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [modalRef, setIsOpenModal]);

    useEffect(() => {
        if (isOpenModal) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isOpenModal]);

    return (
        <>
            {isOpenModal &&
                <div className={styles.overlay}>
                    <div className={styles.modal} ref={modalRef}>
                         {title}
                    </div>
                </div>
            }
        </>

    );
}