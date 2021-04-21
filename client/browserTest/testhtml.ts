export default `<html>
<head>
  <meta charset="utf-8" />
  <title>Mocha Tests</title>
  <link href="https://unpkg.com/mocha@4.0.1/mocha.css" rel="stylesheet" />
</head>
<body>
  <div id="mocha"></div>

  <script src="https://unpkg.com/chai@4.1.2/chai.js"></script>
  <script src="https://unpkg.com/mocha@4.0.1/mocha.js"></script>

  <script>
    mocha.setup('bdd');
  </script>
  <script id="solution">
    ***SOLUTIONHERE***
  </script>
  <script id="test">
    ***TESTHERE***
  </script>

  <script>
    // mocha.checkLeaks();
    mocha.run();
  </script>
</body>
</html>
`;
