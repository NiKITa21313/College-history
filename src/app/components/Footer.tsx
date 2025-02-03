import React from 'react';

// Определяем интерфейс для пропсов компонента Footer
// isDarkMode — необязательный булевый пропс, который указывает, включена ли темная тема
interface FooterProps {
    isDarkMode?: boolean;
}

// Создаем функциональный компонент Footer с использованием React
// Принимаем пропс isDarkMode, который определяет, как будет выглядеть футер
const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
    return (
        // Используем элемент <footer> для создания футера
        // Классы Tailwind CSS динамически меняются в зависимости от значения isDarkMode
        // Если isDarkMode = true, применяются классы темного фона и наоборот
        // Класс p-4 добавляет отступы вокруг содержимого футера
        // Класс text-center выравнивает текст по центру
        <footer className={`p-4 text-center ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-200 text-black'}`}>
            &copy; 2025 College History. Все права защищены.
        </footer>
    );
};

// Экспортируем компонент Footer, чтобы его можно было использовать в других частях приложения
export default Footer;