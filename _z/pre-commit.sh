#!/bin/bash


# cd client && yarn lint:write

# Allow interaction with the terminal
exec < /dev/tty

# Path to your commit message file
COMMIT_MSG_FILE=$1

#!/bin/bash

# List of options
options=("Bug Fix" "Feature" "Documentation" "Refactor" "Quit")

# Display the list of options and prompt the user to select one
echo "Select the type of commit:"
select opt in "${options[@]}"
do
    case $opt in
        "Bug Fix")
            echo "You selected 'Bug Fix'"
            COMMIT_TYPE="Bug Fix"
            break
            ;;
        "Feature")
            echo "You selected 'Feature'"
            COMMIT_TYPE="Feature"
            break
            ;;
        "Documentation")
            echo "You selected 'Documentation'"
            COMMIT_TYPE="Documentation"
            break
            ;;
        "Refactor")
            echo "You selected 'Refactor'"
            COMMIT_TYPE="Refactor"
            break
            ;;
        "Quit")
            echo "Exiting..."
            exit 0
            ;;
        *) 
            echo "Invalid option, please select a number between 1 and ${#options[@]}."
            ;;
    esac
done

# Use $COMMIT_TYPE for the commit message or logic
echo "You chose: $COMMIT_TYPE"


# Loop until a valid purpose is provided
while [ -z "$PACKAGE" ]; do
    echo "Which section of the project was modified?"
    read PACKAGE

    if [ -z "$PACKAGE" ]; then
        echo -e "\033[31mError: Cannot be empty.\033[0m"
    fi
done

while [ -z "$CHANGE_TYPE" ]; do
   echo "What type if change did you make? (fix, debug, ci, feat)"
    read CHANGE_TYPE

    if [ -z "$CHANGE_TYPE" ]; then
        echo -e "\033[31mError: You must provide a purpose for this commit.\033[0m"
    fi
done

while [ -z "$PURPOSE" ]; do
   echo "What is the purpose of this commit?"
    read PURPOSE

    if [ -z "$PURPOSE" ]; then
        echo -e "\033[31mError: You must provide a purpose for this commit.\033[0m"
    fi
done

# Validate that answers were given

# Construct the commit message
COMMIT_MESSAGE="$PACKAGE($CHANGE_TYPE) $PURPOSE"

# if [ -n "$ISSUE_NUMBER" ]; then
#     COMMIT_MESSAGE="$COMMIT_MESSAGE\nRelated Issue/Feature: #$ISSUE_NUMBER"
# fi

# if [ "$BREAKING_CHANGE" == "yes" ]; then
#     COMMIT_MESSAGE="$COMMIT_MESSAGE\n⚠️ Breaking Change!"
# fi

# Append the user's original commit message to retain any input
 echo -e "$COMMIT_MESSAGE\n\n---\n$(cat $COMMIT_MSG_FILE)" > $COMMIT_MSG_FILE

# Save the commit message back into the file
echo "Commit message updated successfully. $COMMIT_MESSAGE"

exit 0
