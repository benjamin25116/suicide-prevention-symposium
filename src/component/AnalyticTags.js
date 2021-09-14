import React from "react";

export const HeadTag = () => {
	return (
		<>
			<script
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-HXGRMMZXNP"
			></script>
			<script>
				{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-HXGRMMZXNP');`}
			</script>
			<script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W736F9X');`}</script>
		</>
	);
};

export const BodyTag = () => {
	return (
		<noscript>
			<iframe
				title="google tag manager"
				src="https://www.googletagmanager.com/ns.html?id=GTM-W736F9X"
				height="0"
				width="0"
				style={{ display: "none", visibility: "hidden" }}
			></iframe>
		</noscript>
	);
};
