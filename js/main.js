// Singer information in array
let singerInfo = [
    {
        name: "The Weeknd",
        dob: "02/16/1990",
        songs: "Blinding Lights, Starboy"
    },
    {
        name: "Bruno Mars",
        dob: "10/08/1985",
        songs: "Uptown Funk, Grenade"
    },
    {
        name: "Post Malone",
        dob: "07/04/1995",
        songs: "Congratulations, Wow."
    },
    {
        name: "Ariana Grande",
        dob: "06/26/1993",
        songs: "7 Rings, thank u, next"
    }
];

// Loops through the array and adds the info to the table
let table = document.getElementById("singerList");
singerInfo.forEach(singer => {
    table.innerHTML += `
    <tr>
        <td>${singer.name}</td>
        <td>${singer.dob}</td>
        <td>${singer.songs}</td>
    </tr>
    `;
});