// document.getElementById('profileForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     // Get form data
//     const username = document.getElementById('username').value;
//     const followers = parseInt(document.getElementById('followers').value);
//     const following = parseInt(document.getElementById('following').value);
//     const posts = parseInt(document.getElementById('posts').value);
//     const bioLength = parseInt(document.getElementById('bioLength').value);

//     // Prepare data for API request
//     const data = {
//         username: username,
//         followers: followers,
//         following: following,
//         posts: posts,
//         bioLength: bioLength
//     };

//     // Send data to backend API
//     fetch('http://localhost:5000/predict', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     })
//     .then(response => response.json())
//     .then(result => {
//         // Display prediction result
//         const prediction = result.prediction === 1 ? 'Fake Profile' : 'Genuine Profile';
//         document.getElementById('prediction').textContent = prediction;
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         document.getElementById('prediction').textContent = 'Error occurred while predicting.';
//     });
// });



window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i=0; i<reveals.length; i++){
        
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

// <--------------Fake Profile Identification------------->

document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the input values
    const username = document.getElementById('username').value;
    const followers = parseInt(document.getElementById('followers').value);
    const following = parseInt(document.getElementById('following').value);
    const posts = parseInt(document.getElementById('posts').value);
    const bioLength = parseInt(document.getElementById('bioLength').value);

    // Basic fake profile detection logic
    let isFake = false;

    // Example criteria for fake profile detection
    if (followers === 0 && following > 100) {
        isFake = true;
    } else if (posts === 0 && bioLength < 10) {
        isFake = true;
    } else if (followers > 10000 && following < 20) {
        isFake = true;
    }

    // Display the result
    const resultElement = document.getElementById('prediction');
    if (isFake) {
        resultElement.textContent = `The profile @${username} is likely fake.`;
        resultElement.style.color = 'red';
    } else {
        resultElement.textContent = `The profile @${username} seems genuine.`;
        resultElement.style.color = 'darkgreen';

    }

    // Show the result section
    document.getElementById('result').style.display = 'block';
});