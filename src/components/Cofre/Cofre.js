'use client'
import styles from "@/app/page.module.css"
import {useState} from "react";
import Dial from "@/components/images/Dial";
import Confirmedball from "@/components/Confirmedball/Confirmedball";
import Logo from "../images/Logo";

export default function Cofre() {
    const [activeBalls, setActiveBalls] = useState([false, false, false]);
    const correctPasswords = ["29A", "256H", "148A"];
    const [currentAttempt, setCurrentAttempt] = useState("");
    const [currentStep, setCurrentStep] = useState(0); 
    const [errorM, setErrorM] = useState(false); 
  
    const handleInputChange = (e) => {
        let value = e.target.value;
        const lastChar = value.slice(-1).toUpperCase();
        value = value.slice(0, -1) + lastChar;
        setCurrentAttempt(value);
    };
  
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        checkPassword();
      }
    };
  
    const checkPassword = () => {
      const input = document.getElementById("senha");
      const errorMessage = document.getElementById("error-message");
  
      if (currentAttempt === correctPasswords[currentStep]) {
        const newActiveBalls = [...activeBalls];
        newActiveBalls[currentStep] = true;
        setActiveBalls(newActiveBalls);
        setCurrentStep(currentStep + 1);
        setCurrentAttempt(""); 
  
        if (currentStep + 1 === correctPasswords.length) {
          window.location.href = "https://www.teste.com";
          return;
        }
  
        input.style.borderColor = "";
        errorMessage.style.display = "none";
      } else {
        input.style.borderColor = "red";
        errorMessage.style.display = "block";
        errorMessage.style.marginTop = "40px";
        errorMessage.style.zIndex = 1;
        setErrorM(false);
      }
    };
  
    return (
      <>
        <div className={styles.dialContainer}>
          <Dial className={styles.dial} />
          <Logo className={styles.logo} />
          <Confirmedball isActive={activeBalls} qntBall={3} />
          <input
            className={styles.senha}
            id="senha"
            type="text"
            size={5}
            maxLength={5}
            placeholder="Coloque a senha aqui"
            value={currentAttempt}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button onClick={checkPassword} className={styles.confirmButton}>
            Confirmar
          </button>
          <div className={styles.errorMessage} id="error-message" style={errorM ? {color: "green", display: "none"} : {color: "red", display: "none"}}>
              {errorM ? "Senha correta" : "Senha incorreta. Tente novamente."}
          </div>
      </div>
      
      </>
    );
  }
  