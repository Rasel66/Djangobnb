'use client'
import Modal from "./Modal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { useState } from "react";
import CustomButton from "../forms/CustomButton";
const LoginModal = () => {
    const loginModal = useLoginModal();
    const content = (
        <>
            <h3 className="text-xl mb-6 text-center">Wellcome to Djangobnb. Please Log in!!!</h3>
            <form action="" className="space-y-4">
                <input type="email" placeholder="Enter E-mail Address" className="border border-gray-300 w-full px-4 h-[50px] rounded-xl" />
                <input type="password" placeholder="Enter Password" className="border border-gray-300 w-full px-4 h-[50px] rounded-xl" />

                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    The error message
                </div>

                <CustomButton
                    label="Log In"
                    onClick={()=>console.log("test")}
                />
            </form>
        </>
    )
    return (
        <Modal
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            label="Log in"
            content={content}
        />
    )
}
export default LoginModal;