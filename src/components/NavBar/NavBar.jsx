import { Cartwidget } from "../Cartwidget/Cartwidget";

export const NavBar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">
									Producto 1
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
								Producto 2
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
								Producto 3
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
								Producto 4
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
								Producto 5
								</a>
							</li>
							<Cartwidget />
						</ul>
					</div>
					
				</div>
				
			</nav>
			
		</>
	);
};
