import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Card } from "../component/card";
import { Context } from "../store/appContext";
/* export const Vehicles = () => {
	return <h1>Vehiculos</h1>;
}; */

export const Vehicles = () => {
	const { store, actions } = useContext(Context);

	//const [vehiculosRecibidos, setVehiculosRecibidos] = useState([]); ---> No se utiliza

	//API Fetch anterior a Flux
	/* const listaVehiculos = () => {
		fetch("https://swapi.dev/api/vehicles/?page=2", {
			method: "GET"
		})
			.then(response => response.json())
			.then(data => setVehiculosRecibidos(data.results));
	}; */

	//UseEffect anterior a Flux
	/* useEffect(() => {
		listaVehiculos();
	}, []); */

	return (
		<div className="container my-2 border rounded">
			<h3 className="text-white text-center">Vehículos</h3>
			{/* <div className="container d-flex flex-wrap"> */}
			<div className="overflow-auto row flex-row flex-nowrap">
				{store.vehicles.map((item, index) => {
					return (
						<Card
							key={index}
							title={item.name}
							imagen={
								"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQUFRgWFRYZGRgYHR4cHBwaHRocJB0eGBocIx0hHh8eJS4lHSUtHxgaJjgnLC8xNjU1GiQ7QDs0Py40NTEBDAwMEA8QGhISHzQkJSs0NDU0PTU0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MTQxMTQ0NDQ0MTQ0NDQ0NDE0NDQ0NDQ0NP/AABEIAKsBJwMBIgACEQEDEQH/xAAcAAEAAwEBAQEBAAAAAAAAAAAABQYHBAMCAQj/xAA9EAACAQIEBAQFAgQFAwUBAAABAgADEQQSITEFBkFRImFxgRMyQpGhsfBSYsHRIzNygvFTkuEUFkOisgf/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACERAQEAAgIDAQADAQAAAAAAAAABAhESIQMxUUEEYZEi/9oADAMBAAIRAxEAPwDGYiICIiAiIgIiICIiAiIgIiICIiAiIgIiIHsuHcgEKxBvawJvbf7XnjLtyfzbUohaPwviACy5FuwGYk38rsfvLliKvDcTpXohHP8AGuU6/wAwsfzpJctXsYvE0jH8k4N3VcPXKFi+jeJVSmpZnY7gWG2t5VOLcs4mh4vh1HpkXVwhtbpe18vpeJZfQgoiJQiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiSfAuFnE1RTBtpcnyFv7wIyJZeIcrMpb4TZ8vQ2BPp3Pl/XSV6rTZSVYEEbgixgec7+E8LfEPkS17XJPScElOEcQrYV1rIDa+5BsffvA9cfy7XpC+XMO6gn8WkPaX3hfOS5Qj3XW2Y30Ba7a9OsljwjD436VttnWwbXYAjQ99e8m93Wj1N1lcTR8b/8AzazXSq2XswBYnyIsPx0n1gOWsNQa9Smznpn1Uf7QAG97zfGs8oovDuFVq5tTQsOp6D1Mt3CuS6Y8WIctv4U+U23GYan0spl3p1qbACwAXawHht2ttPREKMShuepbf0zbmZuNWZz4hMJUpUlK0kVF6eG1/W2p9zPVqgfR0FvKx97GdXFcTRRC75VI1J2/t303mecW5oZrpQuqndz8x9O3r+kzxv66csbOol+O47DUBamT8SxsF0+YWOcbajTX8yC4bzpjsOfBWOX+BvEv2Oo9jK8xJNzqTPmXUYXwc7YbEaY7AU6htYvT8Lbd9D5/NPmvwzg+IF8PiXwzm3hrAsoPW5tf3ubSixGhacTyJjAuekKeJS182Hdan/10b8Su4nDPTYq6MjDdWBUj2Os/MNiXpnMjsp7qxU/cSx4fnvGBclYpiU/gxCLUH3Pi/MvYq0S7YHiHC8QxFXB/BqEEL8OpUyM7WC3X6bE30IGk4eN8GOf4YagjIAAjD4DEE7ln8DnzzmBV4nZj+HVqJAqoyZr5SRo1rXKtsw1GoJnHAREQEREBERAREQEnuWeBDFs4L5coG3nm19Bl/IkDJXl7EV6dZWoAs9j4R9S9Qf30gd3HuVKuH8QPxE6ldxbuBf7yuTbsLxKk6o9SmUaojFlvmN72BYjQ6jfezLcaym8z8rKS1WiUVSxW5IVWZbZhTuSWsTqQLX6ySxO1DiS68Bqnqv3J99Br7T0p8uVTuVH/AHH321HpKqEnVgcY9Fw6GzD92MnE5SY//KvsCZPYTlzCLY5Wdha4cne3QDwkE9NZdVOUQ1Hj61Mqv4Dc3O4JY3JPY7y11OA/Ho5XC36aXIHTX6f11nNU4fQIGWimn8qi1j6SdwvERYK3hP4Pv/eWT6zcvijYvlpqNyFVgOp1P2M8aOIddCfDaxVhp9j0mkVqaO22359ZA8z4TC0ADUOV2+VVFzpvoNR+nvFk9xZlf1TsVgKLEHKUO5yEWI8gRp7faWzl7iVKgAqCye5Gp1JPeVwoWQtTIdTp4gMwsbjfafOHo5rWdltrYXJv6XtJFs20teIBgWW1jqLf+Np618RTWk71TZEW50vt0/t3uBKBSNSmReoii1yWbJYfzKdb+W86uM4mpUoZVC1EJBvTNwcpBAI6agH2mt38Y49vPCcwF6hPwcqa5fF4tNvT0ntxPmj4IOYXdhot77bEk7CV+uWw6M9TSoylUXbLcWJA8gd/QStO5Y3JJJ6nUyW1rUdnE+KVa7ZqjX7DoPQf1nBETLRERAREQEREBOrF46rVy/EdnyjKuYk2HYXnLED9v06T8iICIiAiIgIiICIiAkjwniJovmtcHQ9CPNW6H8HrI6IGpcNxy11urA5gb/TcDe/VHH2I7ixHRSxyJWQVKb1KaIUIbLcXZmZlAst8zkW6hRMqoVmRgykqw2INiJ3Nx7Ek3NVr+39pLNjTeO8oK6f+owLZ0OpTqve19Qf5TKthc6n5CSNwV/odZHcE50xeGqB1qZl+pGAyuOxsND2PT8S/lcNxdC+FY0cQALpcBs1rnQ6MNDYj8S7+ktiES+4VlPYjT9/vSe4JO4PsDKXxLGY2hUNOqzK6nYgfcaaic3/uDFf9Vvsv9prbOmiU6pBAIe3cf26ie2JrIv0ZvMDTz12O46SoU6mJFIO9dlJ1sQosPO49PvOSrxivZQtUnKDdso8TE7i40Fgo9j3k5HFd8DjyjqWACdrnfpvsPxKZzHiHrYusWBY5sotrZVFhb1+b1JPWedHjFVvmYtpqCAP0E7cO/wAU3RQz2+rQ2G2x1AmLlq9tTH46OFYRwER7Au4I7hUBLE/cD3l9w3CaNQFFUKSLXXwn36+4IkRyxw4MoqVCC+qnplAJ0t0k7jKrIugOptcGMct3pMppVeL8tYPCI1V1et4gMuZhqx1zG+w873Nu87nwmWl/gKGIVW+FdVdFYXFwLjbtJ16AqoUqDMj7/wC49ffrITjPL+JFdsRSIJvdShysoAAUa2BsqgaE37TvjdenK9+1SqcRdiyvTQoTZlIJ+5JuDpuLWnHU5fpOC9JmK9VuuZfLbUdjLbUWniTkxSGhXtpVylUftnH0+o09JC8RwVfCVPGpVvpZAMrDysLG+mnrvJe/7bn+K8nBVYkZ2U9mQ/qpInPjeDVaetg6/wAS6j3G4lvw2IFVSyp41F2XUA+anof5T7dp40sUzXyUwbaG7kWPaxG/lMZdLLaocSxcfpM1ytAKFPiddemoaw/dpXZGiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAnrQrMjBkYqwNwVJBBHYjUTynTg8G9ZglNSzHoPySdgPMwL/wAM5jw/E0XDcSAWr8tPEqACWOgD2Gh212PW3XzTklsHV/xRn1vTYfKR0bzP6TwThy8OpfEyfErHwl7XRLj9Ol+vleSXLnNFSmvw8VetQc3sxGZCTqUP0/6du1pnaa+PninDGZbOt1PUa/syv4vgFSmudPGg3A3X1G59ponEqgo1DSQF0DBXdhmC5rWtYajcXPac+Kw/w/Gh8yB+9ZFlZp8NGTMDY+UkMHw1yAz+BBrcA5m87dP9WnoZNVxhy/xMirU630F7/NlOhPnv67zo5kx3wKVOmljUq3JYi+UC1zr1uQB6GWRbdubAcVRamQv4WtY31DL1J3ljfHuVCP4hmBzDQ2BuL9JnVCg1RXLMWyKzFib5WUXGU9NthpaeeG5troACEYDuCDp6G34jj8T37azhsYGsg0uRvpbLr762+8lKOKZCFYEg63Gh3+x95l2A50pswFVCmvzKcw9xa49ry54HiIcZ0cOp6qcwHl5ehmMuW9x28dwksyiz0clU5AQ4YfI6jS3rdZ+4rhSMnwmpKUtopy6dRbU2kXg8RmcWOU3Hi2trrr95YE4jSqC5JVgt+xNu3Q3t6zWPmsn/AF0x5PBN7w7irYnleqqllylBsq7qPMAAe8rPFuX0qEsC1Op/GvXsHHUfnTeaPS4qjeIhqbgbrcgkDY/8TjrYZKo11J69dT3nSZ857c8vHlhe5pj+LxWIwgCV6SumZrN9LZrX6aHTrb0nMuBwWK/yX+BUP0PqpP8AK3T7+01bH8J8JVkDodDoCPcGZ/x3kndsPod8jH/8sdvQ/eTWkmW1V4nwKvh/8xDl6Muqn3G3vaRknsHxzF4NihJsNDTqAkD2Oo9jaexOBxO98JUPUXekx9PmT9BDStxJXiHAK9Fc5UPTO1Smc6H/AHDb3tIqAiIgIiICIiAiIgIiICIiAiIgIiWLlflirjGvqtJfncjt9KX+Y/gdelw4eCcGq4qpkpjQWLMflQHqT+gGp6S21MRh8EBQw4zuf81za5t09v4RoOpvLsnAKVKj8OmpWmRY2JDXYWLMw1zEfV08haVfA8hVBUIdwKY1BXVmHa1rKR1P410zbtNuzguJasCHTOnW3QdiOo8t/wCn5V5PRnLJVy0mF8lsxB/lYnb1BtLFhkw2GX4dJB4dWtsDbd2O508zKlzLzmlMstKzP1I0APn/AG39Igk8RUp4IKRU0UFTnYE2N9DcWYG5FrdB5Sv4vmFMQjthylN0DE0qhsGXq1JibE2+htexNrSj43HVKzZnYk/geg6TlmtGnZX4jVc3ZzvfTT/n3nfW4z8ZUFUkFARmA3B6Ht/zISIVO43i6ikaNEEK3zMdCR/CBvbQb9pBREBOjCYupSbNTdkPdSR9+48pzxAuvCeenWwrpmt9aWB91PhPtaWahzJezUwtRPqyGzL2uh1HXtMknpTqlSCpII2IJBHoRM3CVrHK43cbfhuKU6gJU379x6g6idWGrZRe4udR/wCZkGD5hZSPiDMf418LD3Gje495bOE8xK9grZz2+V/+06N7X9Zwy8NneNevD+TLNeSbjQaXEiNHHoR1nXh+FpiFbKcrjUaeFh6dNe32lZwOMVr2PW9raj1H7E0LBsqIgWzADcG++5FtrnoJvx5Z9zJy/kY+Gayw/Wdcy8sqwyV6f+lxuPNW/odJmnGuVq1C7L/iINbqNVHmvbzGnpP6a8LgqQGB3Vv3/aVrG8t03Zjh3Add0J2P9P3rO0yl99PLN/nb+d+G8Vr4ds1KoVvuNw3+pTofcSwYPE4TFq5q4dUrhSwNPMqsBcs2QG2YAbDe57Sy8x8lI5Jy/Bq+nhPqv9R+ZnuP4dXwrgOCh+llOht1Vh/zC7MVw9rF0COgGrUizAebBvEn+4ASNnrSrurZlZlYfUCQdfMaz8q1CzFmNySST3J3hXnERAREQEREBERAREQEREBNu5HqKcDSZXFTICGsMpVgb5CO4vv1GvWYjJzlrj74OpdblGsHT+IdCP5hfQ+veSjZsPxEOCBr5eXcd/O8jOKcaTDKc7iw2AJvbt/xr+sj8DxdMVTY4ZlQgEsH0ZQL3NhcWsAdD1mfcfwOIuKr5mVhcEgjw9wvRZImntxvmmpW8FP/AA6fQDQm/pt+p6mVuImlIiICIiAiIgIiICIiAiIgTXDuYa1IjMc6joxNx6MNR73HlL1wHndb2VyjHdXIF72vZvlb1Nj2mVxJcZV2/pzhvNaEWqLla2hUEg+249r+shFxhds31XJutwRc30I1mJcO45XoW+G5yj6W8S/bp7Wlz4VzpRfSsDTY/UDcfff7gjznLPHKx28Pkx8dvXtpY4oTZKyrWQ9T8y/7hv8AiRXEuCUq6stKzqd6dSwY+nf1Gsh8JxcEeE5xsMpGo3ve9jvuD7SY4Wvxz4rKBrluMx+0mHOXV9N+WeHLHlLqs14hyeMxam+RBfMKn0kdAR8wv+zKzjeHVKJGZdD8rDVW9D/Teb0eBUcUHLi1z4LdANjbrfU37ESt8U4A9G6OoZG6EXVvPyPmJ6pJfTxcrPbHIlp49yu1MGpRBZN2U6sn91895VpmyxqXZERIpERAREQEREBERAREQOzAY1qLZl9CO4IsR9ifvNF4fjcPxU1UZjTxVRmdCdiBeyDp4VFgOo95l09adQqwZSQykEEGxBGoIPQya72V08U4bUw9RqdRSGX8juJwzUcJWpcboFKmVcbSW99B8QDdh57XHvttnGOwb0XanUUqynUH9ZUlcsREKREQEREBERAREQEREBERAREQOnC4ypSN0Yr+h9RsZaeH84kjLWFj/Ev7v+spsQP6C4DzDSrKAGFthYjT0lgrIrpY2dfvb+xn8yYbFPTOZGKnyP695beEc/4ilYOM47jQ/b/iN1mxovEOGtSOmqdPKZ/zbyz81aitjuyDr3ZR+o/ZuPD+fMLXGV3CE/8AU0/O09MSmmdGDJ3BBC+/adZlLNVjVxrEYktzEaJrsaBup1Nh4c2t8vcf1vbS0iZydSIiAiIgIiICIiAiIgIiIHTgsW9F1qU2KupuGG4ImgYipT43RJUCnjqQLFB8tVbalOo816abzNp0YLFvRqLUpsVdCGVhuCIHnVpsrFWBDA2IO4InnNB4hhqfF6LYmgqpjKS3r0l0DgfWg7Ht0Oh6E0BlINjoRA+YiICIiAiIgIiICIiAiIgIiICIiAiIgJ6067KCoZgG0IBIBHmOs8ogIiICIiAiIgIiICIiAiIgIiICIiB3cK4lVw1Va1Fsrobg/qCOoI0Il74lwCnxKkmOw4+C7llqIR4fiIAWKtcALYg38wN5m0meA8bqYZ0Ny1MNdkOoIawawOgJAHrlF7iBEMtiQemk+Za+asFh6hbEYI5qYt8VQCDTZrWax1ykm1+jCx3BNUgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgdfD8e9B8yGxsVIIDBlYWZWU6MpHQzkiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIH/9k="
							}
							campoUno={"Modelo: "}
							campoDos={"Cant. de Pasajeros: "}
							campoTres={"Tipo: "}
							descUno={item.model}
							descDos={item.passengers}
							descTres={item.vehicle_class}
						/> //agregar el texto key
					);
				})}
			</div>
		</div>
	);
};
