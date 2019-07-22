# Getting Started

In order to get started using React, you will need to install `Node JS`. I
recommend using NVM to install Node as it allows you to install different
versions of Node along side each other.

## Installing NVM

#### Windows: https://github.com/coreybutler/nvm-windows

1. Download and extract [nvm-windows](https://github.com/coreybutler/nvm-windows/releases)
2. Run the installer
3. Open a terminal and run `nvm version` to validate it installed correctly

#### Linux/Mac: https://github.com/nvm-sh/nvm

1. Run `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash`
2. Either source your shell profile or close and reopen a terminal
3. Run `nvm version` to validate it installed correctly

## Installing NodeJS Using NVM

Nvm differs _slightly_ depending on whether you're on Windows or Linux, but
the general premise is the same.

1. **Install a Node version:** `nvm install <version>`
2. **Switch to a Node version:** `nvm use <version>`

First we'll need to install a Node version. For simplicity, we'll use an
explicit Node version.

```
nvm install 12.6.0
nvm use 12.6.0
node --version
```

You should see `v12.6.0` printed to the console

## Clone This Repository

Using `git` (you know how to use Git, right?), clone this repository.

```
git clone https://github.com/devzeebo/react-tutorial.git
```

## Using this Repository

This tutorial repository is tagged with `lesson-XX` to make keeping track of
the lessons easy. You are free to make your own branches, pull lessons into
your branch, or reset and join back with the lesson. I strongly recommend
starting at `lesson-01`, creating your own branch, and then running
```
git pull lesson-XX
```

where `XX` is the lesson you want to merge into your file. You'll have to
deal with any merge conflicts you have, but if you're following along they
should be minimal and easy to deal with.

to progress to [Lesson 2 - Your First React App](02_Setting_Up_A_Project.md)!

# Conclusion

That's it! You now have `nvm`, `node`, and `npm` installed and ready to use,
and have checked out the first lesson in this tutorial!