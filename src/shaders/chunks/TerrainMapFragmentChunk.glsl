
#ifdef USE_MAP

	float th=levelCurveThickness*0.5;
	float r=th*0.1;
	
	// c  es la y medida sobre la banda y va de 0 a 1
	float c = mod(vModelPos.y,levelCurveRange)/levelCurveRange;
	//    rampa de bajada    + rampa de subida        
	//c = ( smoothstep(r,0.0,c)+smoothstep(1.0-th,1.0-th+r,c)) ;
	float c1 = smoothstep(th,th-r,c);
	float c2 = smoothstep(1.0-th-r,1.0-th,c);
	
	float b=c1+c2;

	vec4 bandsColor = vec4(b,b,b,1.0);
	//float high = max(lowLevel,highLevel);
	//float m1 = smoothstep(lowLevel-0.2,lowLevel,vWorldPos.y)*smoothstep(high,high-0.2,vWorldPos.y);
	//vec4 baseColor = (vWorldPos.y<lowLevel)?vec4(0.0,0.0,1.0,1.0):vec4(1.0,0.0,0.0,1.0);
	//vec4 composedColor = mix( baseColor,bandsColor,m1);

	//vec4 sampledDiffuseColor = mix(composedColor,texture2D( map, vUv ),mixFactor);


	float a=smoothstep(-30.0,10.0,vModelPos.y);

	vec3 surfaceColor=mix(bottomColor,topColor,a);
	diffuseColor= vec4(surfaceColor,1.0)+bandsColor*levelCurveIntensity;

#endif

