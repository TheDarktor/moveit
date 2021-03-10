import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';
import Styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(challengesContext);

    return (
        <div className={Styles.overlay}>
            <div className={Styles.container}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um outro level.</p>

                <button type="button" onClick={closeLevelUpModal}><img src="/icons/close.svg" alt="Fechar modal" /></button>
            </div>
        </div>
    );
}