import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import ResultsDetail from "./ResultsDetail";
import { useNavigation } from "@react-navigation/native";

const ResultsList = ({ title, resultList }) => {
	if (!resultList.length) {
		return null;
	}

	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<FlatList
				horizontal
				data={resultList}
				keyExtractor={(result) => result.id}
				showsHorizontalScrollIndicator={false}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("ResultsShow", { id: item.id })
							}
						>
							<ResultsDetail result={item} />
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		marginLeft: 15,
		marginBottom: 5,
		fontWeight: "bold"
	},

	container: {
		marginBottom: 10
	}
});
export default ResultsList;
