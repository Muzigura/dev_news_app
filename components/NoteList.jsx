import { View } from "react-native";
import NoteList from '../components/NoteList';  // Adjust the path based on your folder structure

const NoteList = ({notes}) => {
    return (<View>
         <FlatList
                data={news}
                keyExtractor={(item) => item.$id}
                renderItem={({ item}) => <NoteItem note={item} />}
                    
                
            />
    </View>);
}