"use client";
import React from 'react';
import styles from './Menuderecho.module.scss';

export type MenuderechoProps = object;

{/*El menu derecho es solo de las redes sociales, solo instancie los iconos y le puse los links*/}

const Menuderecho: React.FC<MenuderechoProps>  = ({}) => {
	return (
		<div className={styles.menuderecho}>
 			<div className={styles.redesSociales}> 
				<ul>
					<li>
						links
					</li>
					<li>
						<a href="https://www.facebook.com/alcifu2/">
							<span className="icon icon-facebook"></span>
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/cifu_hdp/">
							<span className="icon icon-instagram"></span>
						</a>
					</li>
					<li>
						<a href="https://x.com/Cifuhdp">
							<span className="icon icon-twitter"></span>
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/alejandro-cifuentes-escobar-24b70a137/">
							<span className="icon icon-linkedin"></span>
						</a>
					</li>
					<li>
						<a href="https://www.youtube.com/@alejandrocifuentes7071">
							<span className="icon icon-youtube"></span>
						</a>
					</li>
				</ul>
			</div>
 		</div>
	);
};

export default Menuderecho;
