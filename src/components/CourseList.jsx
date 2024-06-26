import { useEffect, useState } from 'react';
import { Link,useSearchParams } from 'react-router-dom';

const CourseList = () => {
    const [lessons, setLessons] = useState([]);
    const [searchParams] = useSearchParams();
    
    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Token ${localStorage.getItem('token')}`);

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            redirect: "follow"
        };
        fetch("https://pycourse.pythonanywhere.com/v2/get_lessons/", requestOptions)
            .then((response) => response.json())
            .then((result) => setLessons(result))
            .catch((error) => console.error(error));
    }, [searchParams]); // [] ichida bo'sh massiv berilgan, shuning uchun useEffect faqat bir marta ishga tushadi
    const sty = {
        listElement: "flex items-center justify-between px-3 py-2 bg-slate-900 hover:bg-slate-800 transition rounded-md"
    }
    return (
        <ul className="flex flex-1 flex-col gap-2 text-white font-semibold">
            {lessons.map((lesson, index) => (
                <Link to={`/course?course_id=${lesson.id}`} key={index} className={searchParams.get('course_id')==lesson.id ?`${sty.listElement} bg-slate-800`: sty.listElement}>
                    <label id={`course-${index}`}>{index+1}-dars. {lesson.name}</label>
                </Link>
            ))}
        </ul>
    )
}

export default CourseList;