import React from 'react'

import Routes from '../app/routes/Routes'

export default class Index extends React.Component {
	render(){
		return(
			<html>
				<head>
					<meta charSet='utf-8'/>
          <script defer src='https://use.fontawesome.com/releases/v5.0.6/js/all.js'></script>
					<title>
						Обменник
					</title>
					<link rel='stylesheet' href='styles/style.css'/>
				</head>
				<body>
					<Routes/>
					<script src='client.min.js'></script>
				</body>
			</html>
		)
	}
}
