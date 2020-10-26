import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchScreen = ({ term, onTermChange, onTermSubmit }) => {
	return (
		<View style={styles.backgroundStyle}>
			<Feather name="search" style={styles.iconsStyle} />
			<TextInput
				style={styles.inputStyle}
				placeholder="Search"
				value={term}
				autoCapitalize="none"
				autoCorrect={false}
				onChangeText={onTermChange}
				onEndEditing={onTermSubmit}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	backgroundStyle: {
		backgroundColor: "#F0EEEE",
		height: 50,
		borderRadius: 5,
		marginTop: 15,
		marginBottom: 10,
		marginHorizontal: 15,
		flexDirection: "row"
	},

	inputStyle: {
		flex: 1,
		fontSize: 18
	},

	iconsStyle: {
		fontSize: 35,
		alignSelf: "center",
		marginHorizontal: 15
	}
});

export default SearchScreen;
