import React from 'react';


interface ButtonProps {
    onClick: () => void; // Функция, которая будет вызвана при клике на кнопку
    bgColor: string; // Цвет фона кнопки
    textColor: string; // Цвет текста кнопки
    text: string; // Текст, который будет отображаться на кнопке
    className?: string; // Дополнительные классы для кастомизации (необязательный)
}

const Button: React.FC<ButtonProps> = ({
                                           onClick,
                                           bgColor,
                                           textColor,
                                           text,
                                           className,
                                       }) => {
    return (
        <button
            onClick={onClick} // Вызов функции onClick при клике на кнопку
            className={`transition-transform duration-200 ease-in-out transform hover:scale-105 ${bgColor} ${textColor} ${className}`}
            // Применяем переданные стили для фона, текста и дополнительные классы, а также добавляем плавную анимацию
        >
            {text} {/* Отображаем текст на кнопке */}
        </button>
    );
};

export default Button;