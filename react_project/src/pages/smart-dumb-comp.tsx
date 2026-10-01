import type React from "react";

/**
 *
 * Dumb/Presentational             Smart/Container
 * Відобразити данні               Контролює стан
 * та надати користувацькі         виконує мережеві запити
 * дії вище                        тримає бізнес логіку
 * 
 * Отримує дані через пропс        Отримує дані з API
 * 
 * Можна перевикористовувати       Перевикористання майже неможливе
 */


// Dumb component
interface ProductCardProps{
    title:string;
    price: number;
    imageUrl:string;
    isFavorite:
}


const SmartDubmCompPage:React.FC=()=>{
    return(
        <div></div>
    )
}

export default SmartDubmCompPage;