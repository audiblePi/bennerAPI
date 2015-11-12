<?php 
	$glass_id = $_REQUEST['request'];
?>
	<head>
		<title>Wine Pour Control</title>
		<link rel="stylesheet" type="text/css" href="styles.css">
		<script src='http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'></script>
		<script src='main.js' async></script>
	</head>
	<header>
		<div class="_bcg-logo"><img src="images/logo.png"></div>
	</header>
	<div class="_bcg-main-container">
		<div class="_bcg-image-container" id="<?php echo $glass_id; ?>">
			<div class="_bcg-image-overlay"><div class="_bcg-deco-overlay"></div></div>
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
<?php ?>