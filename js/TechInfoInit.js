var TechInfo = {};
TechInfo.OrigSuffix = "_Orig";
TechInfo.GetProp = function (Prop, Orig)
{
	var Suffix = "";
	if (Orig)
	{
		Suffix = this.OrigSuffix;
	}
	return this[Prop+Suffix];
}
TechInfo.SetProp = function (Prop, Data)
{
	if (!((Prop + "_Orig") in this))
	{
		this[Prop + "_Orig"] = Data;
	}
	this[Prop] = Data;
}