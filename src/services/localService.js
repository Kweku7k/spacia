export const saveUser = (data) => {
    try{
        localStorage.setItem("currentUser", JSON.stringify(data));
    }catch (e){
        console.log("Error saving data")
    }
}

export const getUser = () => {
    try {
        return JSON.parse(localStorage.getItem("currentUser"));
    } catch (e) {
        console.log('An error occurred while parse string to json.');
    }

}
