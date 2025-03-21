import { View, Text } from 'react-native';

const NoteItem = ({ note }) => {
    return (
       <View style={StyleSheet.noteItem}>
        <Text style={StyleSheet.noteText}>{note.text}</Text>
       </View> 
    );
};

export default NoteItem;