export default (name:string) => {
    let firstInitial;
    let secondInitial;
    let combinedInitials;

    // Check if multiple names are provided
    if(name){
        if(name.split(" ").length > 1){ // 1+ word
            firstInitial = name.split(" ")[0].charAt(0);
            secondInitial = name.split(" ")[name.split(" ").length - 1].charAt(0);

            combinedInitials = firstInitial + secondInitial;
        } else { // 1 word
            firstInitial = name.charAt(0)

            combinedInitials = firstInitial;
        }

        return combinedInitials;
    }

    return null;
}