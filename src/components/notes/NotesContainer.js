import React, { Component } from 'react';
import "../../styles/Notes.css";
import NoteCard from './NotesCard';

const firebase = require('firebase');

    const config = {
    apiKey: "AIzaSyAXv7BzLAtESGjzwbszBsOKCyF4_wrZpvg",
    authDomain: "oneappnotebook.firebaseapp.com",
    databaseURL: "https://oneappnotebook.firebaseio.com",
    projectId: "oneappnotebook",
    storageBucket: "oneappnotebook.appspot.com",
    messagingSenderId: "1087678037726"
    };

firebase.initializeApp(config);

class NotesContainer extends Component {
    constructor() {
        super();
        this.state = {
            notes: []
        };
        this.showSidebar = this.showSidebar.bind(this);
        this.addNote = this.addNote.bind(this);
    }
    
    componentDidMount() {
        firebase.database().ref().on('value', (res) => {
            console.log(res.val())
            const userData = res.val();
            const dataArray = [];
            for( let key in userData) {
                userData[key].key = key;
                dataArray.push(userData[key]);
            };
            console.log(dataArray);
            this.setState({
                notes: dataArray
            })
        });
    }
    
    showSidebar(e) {
        e.preventDefault();
        this.sidebar.classList.toggle("show");
    }

    addNote(e) {
        e.preventDefault();
        this.sidebar.classList.toggle("show");
        console.log("Submitted");
        const note = {
            title: this.noteTitle.value,
            text: this.noteText.value
        };

        const dbRef = firebase.database().ref();

        dbRef.push(note);

        this.noteTitle.value = "";
        this.noteText.value = "";
    }

    removeNote(noteId) {
        console.log(noteId);
        const dbRef = firebase.database.ref(noteId);
        dbRef.remove();
    }
    
    render () {
        return (
            <div>
                <header className="mainHeader">
                    <nav className="noteNav">
                        <div className="addNewNote" onClick={this.showSidebar}>
                        <i className="fas fa-plus"></i>                        
                        </div>

                    </nav>
                </header>
                <section className="notes"></section>
                    {this.state.notes.map((note, i) => {
                        return (
                            <NoteCard note={note} key={`note-${i}`} removeNote={this.removeNote}/>
                        )
                    }).reverse()}      
                <aside className="sidebar" ref={ref => this.sidebar = ref}>
                    <form onSubmit={this.addNote}>
                        <h3>Add New Note</h3>
                        <div className="close-btn" onClick={this.showSidebar}>
                            <i className="fa fa-times"></i>
                        </div>
                        <label htmlFor="note-title">Title:</label>
                        <input type="text" name="note-title" ref={ref => this.noteTitle = ref}/>
                        <label htmlFor="note-text">Text:</label>
                        <textarea name="note-text" ref={ref => this.noteText = ref}></textarea>
                        <input type="submit" value="Add Note" />
                    </form>
                </aside>
            </div>
        );
    }
}

export default NotesContainer;