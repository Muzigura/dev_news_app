import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Modal,TextInput } from 'react-native';
import AddNoteModal from '@/components/AddNoteModal';

const NewScreen = () => {
    const [news, setNews] = useState([
        {id: '1', text: 'Note One'},
        {id: '2', text: 'Note Two'},
        {id: '3', text: 'Note Three'},
        {id: '4', text: 'Note Four'},
    ]);

    const [modalVisible, setModalVisible] = useState(false);
    const [newNote, setNewNote] =useState('');

    // Add new Note
    const addNote = () => {
        if (newNote.trim() === '') return;

        setNotes((prevNotes) => [
            ...prevNotes,
            { id: Date.now.toString(), text: newNote },
        ]);
    }

    return (
        <View style={styles.container}>
            <NoteList notes={notes} />
           {/* Note List */}

             <TouchableOpacity style={styles.addButton} onPress={() => setModelVisible(true) }>
                <Text style={styles.addButtonText}>+ Add Note</Text>

             </TouchableOpacity>

             {/* Modal */}
             <AddNoteModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                newNote={newNote}
                setNewNote={setNewNote}
                addNote={addNote}
              />
             

        </View>

    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    newItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f5f5f5',
        padding: 15,
        borderRadius: 5,
        marginVertical: 5,

    },
    newText: {
        fontSize: 18,
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 8,
        alignItem: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default NewScreen;