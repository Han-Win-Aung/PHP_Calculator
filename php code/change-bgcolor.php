<?php
	if(isset($_GET['set']))
	{
		$color=$_GET['c'];
		echo "<body bgcolor='$color'>";
	}
?>
<form>
select bgcolor
<select name="c">
	<option>red</option>
	<option>green</option>
	<option>blue</option>
	<option>black</option>
</select>
<input type="submit" value="set as background" name="set"/>
</form>
</body>