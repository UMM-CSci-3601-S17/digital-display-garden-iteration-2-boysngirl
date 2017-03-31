package umm3601.plant;


import com.google.gson.Gson;
import org.bson.types.ObjectId;
import org.junit.Before;
import org.junit.Test;
import umm3601.digitalDisplayGarden.PlantController;

import java.io.IOException;

import static junit.framework.TestCase.assertEquals;

public class CheckComment {

    @Before
    public void populateDB() throws IOException {
        PopulateMockDatabase db = new PopulateMockDatabase();
        db.populateComments();
    }

    @Test
    public void commentsForAlternanthera() throws IOException {
        PlantController plantController = new PlantController();
        Comment[] filteredComments;
        Gson gson = new Gson();

        String rawComments = plantController.getComments("58dd4943ad21333dd1a18dea");
        filteredComments = gson.fromJson(rawComments, Comment[].class);


        assertEquals("There should be three comments for Alternanthera", 3, filteredComments.length);
//        assertEquals("Incorrect contents for index 0", "Alternanthera", filteredPlants[0].commonName);
//        assertEquals("Incorrect contents for index 1", "Begonia", filteredPlants[1].commonName);
    }

    @Test
    public void commentsForDianthus() throws IOException {
        PlantController plantController = new PlantController();
        Comment[] filteredComments;
        Gson gson = new Gson();

        String rawComments = plantController.getComments("58dd4943ad21333dd1a18dec");
        filteredComments = gson.fromJson(rawComments, Comment[].class);


        assertEquals("There should be one comment for Dianthus", 1, filteredComments.length);
//        assertEquals("Incorrect contents for index 0", "Alternanthera", filteredPlants[0].commonName);
//        assertEquals("Incorrect contents for index 1", "Begonia", filteredPlants[1].commonName);
    }

    private class Comment {
        ObjectId _id;
        ObjectId commentOnObjectOfId;
        String comment;
    }
}

