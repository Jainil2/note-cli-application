# CLI Notes Application

A command-line tool for creating, listing, searching, and managing notes.

## Features
- Add new notes with optional tags
- List all notes
- Search for notes by keywords
- Remove individual notes by ID
- Clean all notes at once
- Launch a web-based interface for note management

## Prerequisites
- Node.js (v14+)
- npm (v6+)

## Installation
1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.

## Usage
```bash
# Add a new note
note new "Your note content" --tags "tag1,tag2"

# List all notes
note all

# Find matching notes
note find "searchTerm"

# Remove a note by ID
note remove [noteId]

# Remove all notes
note clean

# Launch web view on a specified port
note web 5000