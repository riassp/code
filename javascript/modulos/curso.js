let linguages = ['JavaScript', 'Html', 'Css', 'TypeScript', 'Java', 'Ruby', 'Python', 'Arduino', 'C++', 'C#']

/*const getAllCourses = () => {
    return linguages
}
*/

export default function getTodosLinguages(){
    return linguages
}

function getLinguage(i_linguage){
    return linguages[i_linguage]
}


export{linguages, getLinguage}