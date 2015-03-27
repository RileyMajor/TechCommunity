function MakeHTMLTableFromArray(Data, TableObject, IncludeHeader)
{
	var strTableHTML = "<tbody>";
	if (typeof(IncludeHeader) === "boolean" ? IncludeHeader : true)
	{
		for (var prop in Data[0])
		{
			strTableHTML += "<th>" + prop + "</td>";
		}
	}
	for (var i = 0; i < Data.length; i++)
	{
		strTableHTML += "<tr>";
		for (var prop in Data[i])
		{
			strTableHTML += "<td>" + Data[i][prop] + "</td>";
		}
		strTableHTML += "<tr>"; "</tr>";
	}
	strTableHTML += "</tbody>";
	TableObject.innerHTML = strTableHTML;
}