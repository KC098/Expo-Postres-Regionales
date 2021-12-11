import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
import React, { PureComponent } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Image,
	TouchableOpacity,
	Dimensions,
	FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import usuarioScreen from "./screens/usuario";
import recomendationScreen from "./screens/recomendation";
import { ImageBackground } from "react-native-web";
import { abs } from "react-native-reanimated";

const Stack = createStackNavigator();

//Pantalla Home
function HomeScreen({ navigation }) {
	return (
		<View>
			<Icon
				name="user"
				size={15}
				color="black"
				style={styles.btnuser}
				onPress={() => navigation.navigate("login")}
			/>
			<Text style={styles.login}>What are you looking for?</Text>
			<Text style={styles.buscar} onPress={() => navigation.navigate("search")}>
				search
			</Text>
			<Text style={styles.subtexto}>Cant decide?</Text>
			<Text style={styles.subtexto2}>Let us help you.</Text>
			<Text
				style={styles.button2}
				onPress={() => navigation.navigate("recomendation")}
			>
				<Icon name="envelope" size={20} color="white" /> Do survey
			</Text>
			<Text
				style={styles.button}
				onPress={() => navigation.navigate("Details")}
			>
				<Icon
					style={styles.iconito}
					name="address-book"
					size={50}
					color="#DD4D26"
				/>{" "}
				Catalog
			</Text>
		</View>
	);
}

//pantalla search
function searchScreen({ navigation }) {
	return (
		<View>
			<View>
				<Icon
					name="user"
					size={15}
					color="black"
					style={styles.btnuser}
					onPress={() => navigation.navigate("login")}
				/>
			</View>
			<Text style={styles.buscar2}>
				<Icon name="search" size={15} color="black" /> Double click to edit{" "}
			</Text>
			<Text style={styles.results}>137 results found</Text>
			<View style={styles.container3}>
				<View style={[styles.box, styles.box1]}>
					<TouchableOpacity
						onPress={() => navigation.navigate("information")}
						style={styles.card}
					>
						<Text style={styles.button3}>
							<Icon name="heart" size={20} color="red" /> Pastel de chocolate con nieve
						</Text>
						<Image
							source={{
								uri: "https://images-gmi-pmc.edge-generalmills.com/7c1096c7-bfd0-4806-a794-1d3001fe0063.jpg",
							}}
							W
							style={styles.cardimagen}
						></Image>
						<Text style={styles.cardtext}>
							Pastel de chocolate con nieve con trozos galleta Oreo y cereza
							Precio: $89
						</Text>
					</TouchableOpacity>
				</View>
				<View style={[styles.box, styles.box2]}>
					<TouchableOpacity style={styles.card}>
						<Text
							style={styles.button3}
							onPress={() => navigation.navigate("recomendation")}
						>
							<Icon name="heart" size={20} color="red" /> Pastel red velvet
						</Text>
						<Image
							source={{
								uri: "https://insanelygoodrecipes.com/wp-content/uploads/2020/08/Birthday-Dessert-Ideas-Red-Velvet-Cake.png",
							}}
							style={styles.cardimagen}
						></Image>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

//Pantalla Login
function LoginScreen({ navigation }) {
	return (
		<View
			style={{
				width: "100%",
				height: "100%",
				justifyContent: "center",
				alignSelf: "center",
				alignContent: "center",
				alignItems: "center",
			}}
		>
			<Image
				source={require("./img/logo.png")}
				style={styles.logo}
				resizeMode="stretch"
			></Image>
			<Text style={styles.signin}>Sign In</Text>
			<Text
				style={{ height: 30, width: "80%", marginTop: 5, fontWeight: "bold" }}
			>
				Email
			</Text>
			<TextInput
				placeholder={"Enter the user Name"}
				autoCapitalize="none"
				//onChangeText={(value) => this.setState({})}
				style={{ height: 42, width: "80%", borderBottomWidth: 1 }}
			/>
			<Text
				style={{ height: 30, width: "80%", marginTop: 5, fontWeight: "bold" }}
			>
				Password
			</Text>
			<TextInput
				placeholder={"Enter the password"}
				secureTextEntry={true}
				//onChangeText={(value) => this.setState({})}
				style={{
					height: 42,
					width: "80%",
					borderBottomWidth: 1,
				}}
			/>
			<View style={{ marginTop: "10%", width: "80%" }}>
				<TouchableOpacity
					style={{
						borderWidth: 1,
						height: 42,
						width: "80%",
						justifyContent: "center",
						alignItems: "center",
						borderRadius: 10,
						backgroundColor: "black",
						alignSelf: "center",
						textAlign: "center",
					}}
				>
					<Text
						onPress={() => navigation.navigate("usuario")}
						style={{ color: "white" }}
					>
						sign in
					</Text>
				</TouchableOpacity>
			</View>
			<View style={{ marginTop: "5%", width: "80%", fontSize: "15" }}>
				<Text style={{ color: "black" }}>
					Don´t have an account?{" "}
					<Text
						onPress={() => navigation.navigate("register")}
						style={{ color: "red" }}
					>
						Register here!
					</Text>{" "}
				</Text>
			</View>
			<View style={{ marginTop: "10%", width: "30%" }}>
				<Text
					onPress={() => navigation.navigate("search")}
					style={{
						height: 42,
						width: "80%",
						justifyContent: "center",
						alignItems: "center",
						borderRadius: 10,
						backgroundColor: "#26B4DD",
						alignSelf: "center",
						textAlign: "center",
						color: "white",
						padding: 5,
					}}
				>
					skip!
				</Text>
			</View>
		</View>
	);
}

//Pantalla Register
function RegisterScreen({ navigation }) {
	return (
		<View
			style={{
				width: "100%",
				height: "100%",
				justifyContent: "center",
				alignSelf: "center",
				alignContent: "center",
				alignItems: "center",
			}}
		>
			<Image
				source={require("./img/logo.png")}
				style={styles.logo}
				resizeMode="stretch"
			></Image>
			<Text style={styles.signin}>Register</Text>
			<Text
				style={{ height: 30, width: "80%", marginTop: 5, fontWeight: "bold" }}
			>
				Username
			</Text>
			<TextInput
				placeholder={"Enter the user Name"}
				autoCapitalize="none"
				//onChangeText={(value) => this.setState({})}
				style={{ height: 42, width: "80%", borderBottomWidth: 1 }}
			/>
			<Text
				style={{ height: 30, width: "80%", marginTop: 5, fontWeight: "bold" }}
			>
				Email
			</Text>
			<TextInput
				placeholder={"Enter the email"}
				autoCapitalize="none"
				onChangeText={(value) => this.setState({})}
				style={{ height: 42, width: "80%", borderBottomWidth: 1 }}
			/>
			<Text
				style={{ height: 30, width: "80%", marginTop: 5, fontWeight: "bold" }}
			>
				Password
			</Text>
			<TextInput
				placeholder={"Enter the password"}
				secureTextEntry={true}
				//onChangeText={(value) => this.setState({})}
				style={{
					height: 42,
					width: "80%",
					borderBottomWidth: 1,
				}}
			/>
			<View style={{ marginTop: "10%", width: "80%" }}>
				<TouchableOpacity
					style={{
						borderWidth: 1,
						height: 42,
						width: "80%",
						justifyContent: "center",
						alignItems: "center",
						borderRadius: 10,
						backgroundColor: "black",
						alignSelf: "center",
						textAlign: "center",
					}}
				>
					<Text
						onPress={() => navigation.navigate("usuario")}
						style={{ color: "white" }}
					>
						sign in
					</Text>
				</TouchableOpacity>
			</View>
			<View style={{ marginTop: "5%", width: "80%", fontSize: "15" }}>
				<Text style={{ color: "black" }}>
					already have an account?{" "}
					<Text
						onPress={() => navigation.navigate("login")}
						style={{ color: "red" }}
					>
						Login in!
					</Text>{" "}
				</Text>
			</View>
		</View>
	);
}

const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;


function informationScreen({ navigation }) {
	return (
		<View style={[styles.box, styles.box1]}>
			<TouchableOpacity
				onPress={() => navigation.navigate("information")}
				style={styles.card}
			>
				<Text style={styles.button3}>
							<Icon name="heart" size={20} color="red" /> Pastel de chocolate con nieve
						</Text>
						<Image
							source={{
								uri: "https://images-gmi-pmc.edge-generalmills.com/7c1096c7-bfd0-4806-a794-1d3001fe0063.jpg",
							}}
							W
							style={styles.cardimagen}
						></Image>
						<Text style={styles.cardtext}>
							Pastel de chocolate con nieve con trozos galleta Oreo y cereza
							Precio: $89
						</Text>
				<Text style={styles.cardtext}>Dirección</Text>
				<Text style={styles.cardtext}>
					La rellena, Av. luis encinas y quintero arce. Hermosillo, Sonora,
					Mexico
				</Text>
			</TouchableOpacity>

			<TouchableOpacity style={{width:"30%", marginTop:"25%", marginLeft:"5%"}}
				onPress={() => navigation.navigate("search")}
				>

				<Image
					source={{
						uri:"https://png.pngitem.com/pimgs/s/110-1104555_uber-eats-uber-eats-new-logo-hd-png.png"
					}}					
					style={styles.card}
				></Image>
			</TouchableOpacity>
		</View>
	);
}

//Pantalla principal
export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="login">
				<Stack.Screen
					name="login"
					component={LoginScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="register"
					component={RegisterScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="search"
					component={searchScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="recomendation"
					component={recomendationScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="information"
					component={informationScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="usuario"
					component={usuarioScreen}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

var box_count = 2;
var box_height = height / box_count;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "pink",
		alignItems: "center",
		justifyContent: "center",
	},
	login: {
		fontSize: 30,
		fontWeight: "bold",
		paddingLeft: 15,
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 20,
	},
	buscar: {
		fontSize: 20,
		fontWeight: "bold",
		color: "gray",
		margin: 20,
		padding: 15,
		backgroundColor: "#EBEBEB",
	},
	subtexto: {
		fontSize: 20,
		fontWeight: "bold",
		color: "gray",
		margin: 20,
		marginBottom: 0,
		marginTop: 30,
		marginLeft: 40,
	},
	subtexto2: {
		fontSize: 20,
		fontWeight: "bold",
		color: "gray",
		margin: 20,
		marginLeft: 40,
		marginTop: 0,
	},
	image: {
		height: 128,
		width: 128,
		borderRadius: 64,
	},
	button: {
		borderRadius: 8,
		borderColor: "#DD4D26",
		borderWidth: 2,
		padding: 20,
		paddingLeft: 10,
		margin: 60,
		marginTop: 30,
		textAlign: "center",
		fontSize: 25,
		color: "#DD4D26",
		fontWeight: "bold",
		alignItems: "center",
	},
	button2: {
		backgroundColor: "#26B4DD",
		textAlign: "center",
		padding: 15,
		borderRadius: 4,
		marginLeft: 25,
		marginRight: 25,
		fontSize: 15,
		color: "white",
		fontWeight: "bold",
		alignItems: "center",
	},
	button3: {
		textAlign: "left",
		padding: 15,
		borderRadius: 4,
		marginLeft: 2,
		marginRight: 25,
		fontSize: 15,
		color: "black",
		fontWeight: "bold",
		alignItems: "center",
	},
	iconito: {
		marginRight: 10,
		paddingRight: 10,
	},
	btnuser: {
		fontSize: 30,
		fontWeight: "bold",
		marginTop: 30,
		marginLeft: 5,
		paddingTop: 15,
		backgroundColor: "#D1D1D1",
		borderRadius: 50,
		width: 50,
		height: 50,
		alignItems: "center",
		textAlign: "center",
		marginBottom: 15,
	},
	logo: {
		marginTop: 5,
		marginBottom: 5,
		padding: 20,
		width: height_logo,
		height: height_logo,
	},
	signin: {
		fontSize: 30,
		fontWeight: "bold",
		textAlign: "left",
	},
	buscar2: {
		fontSize: 15,
		fontWeight: "bold",
		color: "#898989",
		margin: 10,
		padding: 15,
		backgroundColor: "#FFF",
	},
	results: {
		marginLeft: 10,
		fontWeight: "bold",
		fontSize: 14,
	},
	container2: {
		flex: 1,
		marginTop: 15,
		padding: 15,
		alignItems: "center",
		justifyContent: "center",
	},
	cardtext: {
		fontSize: 13,
		textAlign: "justify",
		marginTop: 5,
		marginLeft: 5,
		marginRight: 5,
	},
	card: {
		backgroundColor: "#fff",
		marginBottom: 5,
		marginTop: 10,
		marginLeft: "2%",
		width: "96%",
		height: "50%",
		shadowColor: "#000",
	},
	cardimagen: {
		width: "100%",
		height: 200,
		resizeMode: "cover",
	},
	btnfav: {
		marginTop: 2,
		marginLeft: 0,
		paddingTop: 5,
		width: 50,
		height: 50,
		alignItems: "center",
		textAlign: "center",
	},
	container3: {
		flex: 1,
		flexDirection: "column",
	},
	box: {
		height: box_height,
	},
	box1: { backgroundColor: "#FFF" },
	box2: {
		backgroundColor: "#FFF",
	},
	wrap: {
		flex: 1,
		width: Width,
		height: Height * 0.25,
	},
});
