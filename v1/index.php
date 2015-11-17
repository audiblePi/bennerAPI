<?php 
	$glass_id = $_REQUEST['request'];
?>
<html>
	<head>
		<title>Wine Pour Control</title>
		<link rel="stylesheet" type="text/css" href="styles.css">
		<script src='http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'></script>
		<script src="lib/zoom-master/jquery.zoom.js"></script>
		<script src='main.js' async></script>
	</head>
	<header>
		<div class="_bcg-logo"><img src="images/logo.png"></div>
	</header>
	<div class="_bcg-main-container">
		<div class="_bcg-image-container" id="<?php echo $glass_id; ?>">
			<div class="_bcg-image-overlay">
				<div class="_bcg-deco-overlay"></div>
				<div class="_bcg-ruler-overlay">
					<div class="_bcg-ruler-container">
						<div class="_bcg-rule" style="top:20%"><span class="_bcg-rule-num">8</span></div>
						<div class="_bcg-rule" style="top:23%"><span class="_bcg-rule-num">7</span></div>
						<div class="_bcg-rule" style="top:26%"><span class="_bcg-rule-num">6</span></div>
						<div class="_bcg-rule" style="top:29%"><span class="_bcg-rule-num">5</span></div>
					</div>
				</div>
			</div>
			<?php echo "<img src='images/".$glass_id.".jpg'>"; ?>
		</div>
		<div class="_bcg-option-container">
			<div class="_bcg-decoration-wrapper">
				<div>Choose A Decoration</div>
				<div>
					<ul class="_bcg-decoration">
						<li id="A">Corkscrew</li>
						<li id="B">Wine Glass</li>
						<li id="C">Fun - Boring</li>
						<li id="D">Plate and Silver</li>
					</ul>
				</div>
			</div>
			<div class="_bcg-portion-wrapper">
				<div>Choose The Portion Size</div>
				<div>
					<ul class="_bcg-portion">
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
		<ul class="_bcg-buttons">
			<li><button class="_bcg-cancel">Cancel</button></li>
			<li><button class="_bcg-print">Print</button></li>
			<li><button class="_bcg-accept">Accept</button></li>
		</ul>
	</footer>
</html>
<?php ?>