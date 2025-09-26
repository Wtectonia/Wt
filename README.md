<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Saif Eddine - Personal Profile</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f4f4f9;
      margin: 0;
      padding: 0;
      color: #333;
    }

    /* الفيديو */
    .video-container {
      position: relative;
      width: 100%;
      height: 60vh;
      overflow: hidden;
    }

    .video-container video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .overlay-text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 2em;
      text-shadow: 2px 2px 8px rgba(0,0,0,0.7);
      text-align: center;
    }

    .container {
      max-width: 800px;
      margin: auto;
      padding: 20px;
    }

    .card {
      background: white;
      padding: 20px;
      border-radius: 15px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.15);
      margin-top: -50px;
      position: relative;
      z-index: 1;
    }

    h1 {
      text-align: center;
      color: #2c3e50;
    }

    ul {
      line-height: 1.8;
    }

    /* أزرار جميلة */
    .btn {
      display: inline-block;
      background: linear-gradient(45deg, #6a11cb, #2575fc);
      color: white;
      border: none;
      padding: 12px 24px;
      margin: 10px 0;
      border-radius: 30px;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .btn:hover {
      transform: scale(1.08);
      background: linear-gradient(45deg, #2575fc, #6a11cb);
      box-shadow: 0 6px 16px rgba(0,0,0,0.3);
    }

    #interests {
      display: none;
      margin-top: 10px;
    }

    .footer {
      text-align: center;
      margin-top: 20px;
      font-size: 14px;
      color: gray;
    }
  </style>
</head>
<body>

  <!-- الفيديو -->
  <div class="video-container">
    <video autoplay muted loop>
      <source src="your-video.mp4" type="video/mp4">
      Your browser does not support video.
    </video>
    <div class="overlay-text">Welcome to Saif Eddine's Profile</div>
  </div>

  <!-- المحتوى -->
  <div class="container">
    <div class="card">
      <h1>Saif Eddine</h1>
      <p><strong>Age:</strong> 16 years old</p>

      <h2>Skills</h2>
      <ul>
        <li>Basic programming skills</li>
        <li>Little general knowledge</li>
        <li>Willingness to learn more</li>
      </ul>

      <h2>Dreams</h2>
      <p>
        Saif Eddine dreams of studying abroad, especially in 
        <strong>France</strong>, <strong>Spain</strong>, or <strong>Germany</strong>.
      </p>

      <!-- زر الاهتمامات -->
      <button class="btn" onclick="toggleInterests()">Show Interests</button>
      <div id="interests">
        <h2>Interests</h2>
        <ul>
          <li>Cybersecurity</li>
          <li>Playing football</li>
          <li>Technology and discovery</li>
          <li>Other hobbies and activities</li>
        </ul>
      </div>
    </div>

    <div class="footer">
      &copy; 2025 | Personal Profile Page
    </div>
  </div>

  <script>
    function toggleInterests() {
      const section = document.getElementById("interests");
      section.style.display = (section.style.display === "none" || section.style.display === "") 
        ? "block" : "none";
    }
  </script>
</body>
</html>
