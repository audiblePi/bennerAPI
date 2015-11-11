<?php 
	$glass_id = $_REQUEST['request'];
?>
	<head>
		<title>Wine Pour Control</title>
		<link rel="stylesheet" type="text/css" href="//localhost.bennerapi/api/v1/styles.css">
		<script src='http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'></script>
		<script src='//localhost.bennerapi/api/v1/main.js' async></script>
	</head>
	<header>
		<div class="logo"><img src="//localhost.bennerapi/api/v1/images/logo.png"></div>
	</header>
	<div class="main-container">
		<div class="image-container" id="<?php echo $glass_id; ?>">
			<div class="image-overlay"><div class="deco-overlay"></div></div>
			<?php echo "<img src='//localhost.bennerapi/api/v1/images/".$glass_id.".jpg'>"; ?>
		</div>
		<div class="option-container">
			<div class="decoration-wrapper">
				<div>Choose A Decoration</div>
				<div>
					<ul class="decoration">
						<li id="A">Corkscrew</li>
						<li id="B">Wine Glass</li>
						<li id="C">Fun - Boring</li>
						<li id="D">Plate and Silver</li>
					</ul>
				</div>
			</div>
			<div class="portion-wrapper">
				<div>Choose The Portion Size</div>
				<div>
					<ul class="portion">
						<li id="5">5 oz.</li>
						<li id="6">6 oz.</li>
						<li id="7">7 oz.</li>
						<li id="8">8 oz.</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<footer>
		<ul class="buttons">
			<li><button class="cancel">Cancel</button></li>
			<li><button class="print">Print</button></li>
			<li><button class="accept">Accept</button></li>
		</ul>
	</footer>
<?php
	//var_dump($_REQUEST['request']);
?>