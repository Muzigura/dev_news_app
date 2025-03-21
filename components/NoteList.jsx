import { View } from "react-native";
import NoteItem from "./NoteItem";

const NoteList = ({notes}) => {
    return (<View>
         <FlatList
                data={news}
                keyExtractor={(item) => item.id}
                renderItem={({ item}) => <NoteItem note={item} />}
                    
                
            />
    </View>);
}