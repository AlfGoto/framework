
if [ -d roro ]; then 
    rm -r roro
    mkdir roro
else 
    mkdir roro
fi

cd roro
curl -s https://t4.ftcdn.net/jpg/03/09/97/57/360_F_309975771_1LcdaVK6D7eokEDzaAInNBGOG5tA9M80.jpg > img.png
curl -s https://media1.tenor.com/m/587AABroBfwAAAAC/dance-skeleton.gif > gif.gif
# # eog --fullscreen img.png
# eog --fullscreen gif.gif


# cd ..
# rm -r roro