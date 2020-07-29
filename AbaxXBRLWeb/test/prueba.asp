<html>

<head>
	<link type="text/css" rel="stylesheet" href="css/app.css">
	<script type="text/javascript" src="script/jquery.min.js"></script>
</head>
<body>
	<table>
	<tr>
		<td>
		<%
		response.write("SI HAY ASP .NET")
		%>
		</td>
	</tr>
		<tr>
			<td class="celdaSeleccionada "> Celda Amarilla </td>
		</tr>
		<tr>
			<td><div id="divTest"> <img src="img/logo_abax_horizontal.png" /></div></td>
		</tr>
	</table>
	<form action="prueba.asp" method="post">
		<button type="submit" value="Enviar">Enviar</button>
		<input type="hidden" value="eee"/>
	</form>
	<script type="text/javascript">
		$("#divTest").show();
		setTimeout(function(){
			$("#divTest").hide();
			setTimeout(function(){$("#divTest").show();},2000);
		} ,2000);
	</script>
</body>
</html>