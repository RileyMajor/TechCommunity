function ToggleClass(ID, ClassName)
{
	var obj = document.getElementById(ID);
	var ClassRegex = new RegExp("(?:^|\\s)" + ClassName + "(?!\\S)", "g");
	var IsPresent = obj.className.match(ClassRegex);
	if (IsPresent) {
		obj.className = obj.className.replace(ClassRegex, "");
	}
	else {
		obj.className += " " + ClassName;
	}
	IsPresent = !IsPresent;
	return IsPresent;
}