<!DOCTYPE html>
<html>
<head>
  <title>MoodGrow</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #6a11cb, #2575fc);
      color: white;
      text-align: center;
    }
    h1 {
      margin-top: 40px;
      font-size: 48px;
      text-shadow: 2px 2px 5px black;
    }
    #game {
      margin-top: 40px;
    }
    #pet {
      font-size: 100px;
      transitio
