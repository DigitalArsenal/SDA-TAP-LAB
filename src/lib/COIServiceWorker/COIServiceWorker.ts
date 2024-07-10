export default () => {
    // Create a new script element
    const script = document.createElement("script");

    // Set the src or other attributes of the script
    script.src = "./coi-serviceworker.js";
    //script.async = true;
    // Append the script to the document head
    document.head.appendChild(script);
}