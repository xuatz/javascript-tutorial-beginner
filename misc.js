var i = 0;
alert("fun example 5 :" + ++i +i);
		
i = 0;
alert("fun example 6 :"+ (++i + ++i) + ++i);

i = 0;
var u = 5;
alert("fun example 7 :" + i+++u);

alert("fun example 8 :" + i+ ++u);

/*

	public static void setSb(StringBuffer sb){
		StringBuffer sb2 = sb;
		sb2.replace(0, sb.length(), "Java");
		sop(sb.toString());
		sb = new StringBuffer();
		sb2 = new StringBuffer();
	}
	

	static void setStr(String[] strArr){
		strArr[0] = "Bye";
		String[] strArr2 = {"ByeBye"};
		strArr = strArr2;
	}

		String[] strArr = {"Hi", "HiHi"};
		System.out.println("str[0]: "+strArr[0]);
		setStr(strArr);
		System.out.println("str[0]: "+strArr[0]);
		
		// ==============
		
		StringBuffer sb = new StringBuffer();
		sb.append("Guava");
		setSb(sb);
		sop(sb.toString());
		
		// =================
		



*/
