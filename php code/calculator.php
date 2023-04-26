<?php
if(isset($_POST['disp']))
{
$f=$_POST['f'];
$s=$_POST['s'];
$ch=$_POST['ch'];
	switch($ch)
	{
	case '+':
	$res=$f+$s;
	break;
	case '-':
	$res=$f-$s;
	break;
	case '*':
	$res=$f*$s;
	break;
	case '/':
	$res=$f/$s;
	break;
	
	}
}
?>
<table>
<form method="post">
<tr>
<td>Result</td>
<td><input type="text" value="<?php echo @$res; ?>" readonly="true"/></td>
</tr><tr>
<td>First number</td><td>
<input type="text" name="f"/></td>
</tr>
<td>Second number</td>
<td><input type="text" name="s"/></td>
</tr>
<tr>
<td>Your Choice</td>
<td><select name="ch">
	<option>+</option>
	<option>-</option>
	<option>*</option>
	<option>/</option>
</select></td>
</tr>
<tr><td colspan="2" align="center">
<input type="submit" value="Display Result" name="disp"/>
</td>
</tr></form>
</table>