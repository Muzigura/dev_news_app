import { useState, useEffect  } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Modal,TextInput } from 'react-native';
import AddNoteModal from '@/components/AddNoteModal';
import noteService from '@/services/noteService';

const NewScreen = () => {
    const [notes, setNotes] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [newNote, setNewNote] =useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        setLoading(true);
        const response = await noteService.getNotes();

        if (response.error) {
            setError(response.error);
            Alert.alert('Error', response.error);
        } else {
            setNotes(response.data);
            setError(null);
        }

        setLoading(false);
    };

    // Add new Note
    const addNote = async () => {
        if (newNote.trim() === '') return;

        const response = await noteService.addNote(newNote);

        if (response.error) {
            Alert.alert('Error', response.error);
        } else {
            setNotes([...notes, response.data]);
        }

        setNewNote('');
        setModalVisible(false);

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