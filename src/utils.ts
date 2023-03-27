export const getDummyData = () => {
    const frameworks = ["React", "Angular", "Vue", "Svelte", "Elm", "Haskell"];


    return Array.from({ length: 100 }, () => {
        const start = Math.floor(Math.random() * (frameworks.length-1))
        const end = Math.floor(Math.random() * (frameworks.length-start+1)) + start+1;
        return frameworks.slice(start, end);
    });
}