try {
    
    throw new Error ("seu código tem um problema");
} catch (e) {
    console.log(e.name + ": " + e.message);
}