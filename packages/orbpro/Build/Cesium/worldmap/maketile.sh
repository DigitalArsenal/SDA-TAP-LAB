OUTPUTDIR=bmng

rm -rf $OUTPUTDIR
mkdir $OUTPUTDIR

for f in `ls -1 world*jpg`; do 
  YEARMON=$(echo $f |awk -F "." '{print $4}')
  NAME=world.topo.bathy.${YEARMON}
  gdal_translate -of VRT -a_ullr -180 90 180 -90 -a_srs EPSG:4326 $f $OUTPUTDIR/$NAME.vrt 
  gdal2tiles.py -z 0-3 -d -s EPSG:4326 $OUTPUTDIR/$NAME.vrt $OUTPUTDIR/$YEARMON
  PNGLIST=`find $OUTPUTDIR/$YEARMON -name \*.png`
  for PNG in $PNGLIST; do
    DIR=$(dirname $PNG)
    BASE=$(basename $PNG .png)
    JPG=${DIR}/$BASE.jpg
    convert $PNG $JPG
  done
done
